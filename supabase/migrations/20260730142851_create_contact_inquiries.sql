/*
# Create contact_inquiries table (single-tenant, no auth)

## Purpose
Stores inquiries submitted through the Berkshire Luxury Interiors website
contact form. The site has no sign-in screen, so submissions are written by
the anon-key client and read by the business owner from the Supabase
dashboard directly.

1. New Tables
- `contact_inquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's full name
  - `email` (text, not null) — submitter's email
  - `phone` (text, not null) — submitter's phone number
  - `service` (text, not null) — which service they are interested in
  - `message` (text, not null) — free-text project details
  - `status` (text, not null, default 'new') — tracking column for the owner
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_inquiries`.
- Allow anon + authenticated to INSERT (so the public contact form works).
- No SELECT/UPDATE/DELETE policies for anon: inquiries are private to the
  business owner, who manages them via the Supabase dashboard (service role
  bypasses RLS). This keeps submitted contact details off the public client.
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON contact_inquiries;
CREATE POLICY "anon_insert_inquiries" ON contact_inquiries
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE INDEX IF NOT EXISTS contact_inquiries_created_at_idx
  ON contact_inquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS contact_inquiries_status_idx
  ON contact_inquiries (status);
