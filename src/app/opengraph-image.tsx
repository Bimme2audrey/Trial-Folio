import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'Bimme Audrey Zun — Frontend Developer in Yaoundé, Cameroon';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Share card for LinkedIn / WhatsApp / X previews: name on the left, the full
// BuildWithBimme logo on a neumorphic tile on the right.
export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), 'public/brand/buildwithbimme.png'));
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 90px',
          background: '#e4e5ec',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 20, color: '#80838f', letterSpacing: 3, whiteSpace: 'nowrap' }}>
            <div style={{ width: 16, height: 16, borderRadius: 8, background: '#ff4b2b' }} />
            FRONTEND DEVELOPER · YAOUNDÉ, CAMEROON
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: 92, lineHeight: 1, whiteSpace: 'nowrap', color: '#1b1c22', letterSpacing: -4 }}>
            <span>Bimme Audrey</span>
            <span style={{ display: 'flex' }}>
              Zun<span style={{ color: '#ff4b2b' }}>.</span>
            </span>
          </div>
          <div style={{ fontSize: 30, color: '#4a4d5a', marginTop: 10 }}>React · Next.js · Soft, tactile interfaces</div>
        </div>

        <div
          style={{
            width: 300,
            height: 300,
            flexShrink: 0,
            marginLeft: 40,
            borderRadius: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #f3f4f9, #dcdee7)',
            boxShadow: '-14px -14px 36px rgba(255,255,255,0.85), 20px 20px 44px rgba(158,162,184,0.7)',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse only renders plain <img> */}
          <img src={logoSrc} width={264} height={264} alt="" />
        </div>
      </div>
    ),
    size
  );
}
