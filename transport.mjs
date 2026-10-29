import {API_ROOT} from './runtime-config.mjs';

// The portable build uses application-issued tokens, not third-party cookies.
// They are scoped to this tab and never appear in links, QR codes or logs.
export async function apiFetch(path, init = {}) {
  const remote = /^https:\/\//.test(API_ROOT);
  const scope = path.startsWith('admin/') ? 'admin' : 'card';
  const key = 'earth-session-' + scope;
  const headers = new Headers(init.headers);
  const token = remote ? sessionStorage.getItem(key) : null;
  if (token) headers.set('X-Earth-Session', token);
  const response = await fetch(API_ROOT + path, {
    ...init, headers, credentials: remote ? 'omit' : 'same-origin',
  });
  if (!remote || !response.headers.get('Content-Type')?.includes('application/json')) return response;
  const payload = await response.json();
  if (payload.sessionToken) {
    sessionStorage.setItem(key, payload.sessionToken);
    delete payload.sessionToken;
  }
  if (payload.clearSession || response.status === 401) sessionStorage.removeItem(key);
  delete payload.clearSession;
  return new Response(JSON.stringify(payload), {
    status: response.status, headers: {'Content-Type': 'application/json'},
  });
}
