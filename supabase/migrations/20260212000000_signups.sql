CREATE TABLE signups (
  id bigint generated always as identity primary key,
  email text not null unique,
  created_at timestamptz default now()
);

ALTER TABLE signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON signups
  FOR INSERT TO anon
  WITH CHECK (true);
