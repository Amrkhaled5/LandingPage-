import { PDFParse } from 'pdf-parse';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const filePath = resolve('public/assets/pdf/ABOUT ZAHRA.pdf');
const url = 'file:///' + filePath.split('\\').join('/');

const p = new PDFParse({ verbosity: 0 });
try {
  await p.load({ url });
  const text = await p.getText();
  console.log('=== PDF TEXT ===');
  console.log(text ? text.substring(0, 10000) : 'empty');
} catch(e) {
  // try with buffer
  try {
    const buf = readFileSync(filePath);
    await p.load(buf);
    const text = await p.getText();
    console.log(text ? text.substring(0, 10000) : 'empty');
  } catch(e2) {
    console.error('Both failed:', e.message, '|', e2.message);
  }
}
