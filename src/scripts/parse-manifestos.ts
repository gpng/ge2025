import fs from 'node:fs';
import { PARTIES } from '@/data/parties';
import { type Party, PartyId } from '@/models';
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';

const parsePAP = async () => {
  return parsePDF(
    'data/manifestos/pap-manifesto-2020.pdf',
    'data/manifestos/pap-manifesto-2020.txt',
    PARTIES[PartyId.PAP],
    2020,
  );
};

const parseWP = async () => {
  return parsePDF(
    'data/manifestos/wp-manifesto-2020.pdf',
    'data/manifestos/wp-manifesto-2020.txt',
    PARTIES[PartyId.WP],
    2020,
  );
};

const parsePSP = async () => {
  return parsePDF(
    'data/manifestos/psp-manifesto-2020.pdf',
    'data/manifestos/rdr-manifesto-2020.txt',
    PARTIES[PartyId.PSP],
    2020,
  );
};

const parseRP = async () => {
  return parsePDF(
    'data/manifestos/rp-manifesto-2020.pdf',
    'data/manifestos/rp-manifesto-2020.txt',
    PARTIES[PartyId.RP],
    2020,
  );
};

const parseNSP = async () => {
  return parsePDF(
    'data/manifestos/nsp-manifesto-2020.pdf',
    'data/manifestos/nsp-manifesto-2020.txt',
    PARTIES[PartyId.NSP],
    2020,
  );
};

const parseRDU = async () => {
  return parsePDF(
    'data/manifestos/rdu-manifesto-2020.pdf',
    'data/manifestos/rdu-manifesto-2020.txt',
    PARTIES[PartyId.RDU],
    2020,
  );
};

const parseSPP = async () => {
  return parsePDF(
    'data/manifestos/spp-manifesto-2020.pdf',
    'data/manifestos/spp-manifesto-2020.txt',
    PARTIES[PartyId.SPP],
    2020,
  );
};

const parsePDF = async (
  pdfInPath: string,
  txtOutPath: string,
  party: Party,
  year: number,
) => {
  const loader = new PDFLoader(pdfInPath);
  const docs = await loader.load();

  const header = `Party: ${party.name} (${party.id})\nYear: ${year}\n\n`;

  const textContent = docs
    .map((doc: { pageContent: string }) => doc.pageContent)
    .join('\n');

  const fullText = header + textContent;

  fs.writeFileSync(txtOutPath, fullText);

  console.log(`Parsed ${party.id} PDF manifesto to ${txtOutPath}`);
};

const main = async () => {
  await parsePAP();
  await parseWP();
  await parsePSP();
  await parseRP();
  await parseNSP();
  await parseRDU();
  await parseSPP();
};

main();
