/* Supabase 연결 정보 — /share 전용
 *
 * 정적 배포(빌드 도구 없음)라서 브라우저가 직접 읽을 수 있는 곳에 둔다.
 * anon key 는 원래 클라이언트에 노출되는 공개 키다. 이건 정상이다.
 * shares 테이블은 RLS 로 select / insert 만 열려 있고 update / delete 는 막혀 있다.
 *
 * service_role key 는 절대 여기에 넣지 말 것.
 */
window.SUPABASE_URL      = "https://alkxsmpgzemptmlqxefz.supabase.co";
window.SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsa3hzbXBnemVtcHRtbHF4ZWZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg5NzI1NDYsImV4cCI6MjEwNDU0ODU0Nn0.0r7VRsfDiRn9Ddszih-1m0CXfJajXGkLWty0KI1_Ys4";
