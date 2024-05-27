import { PARTIES } from '@/data/parties';
import { PartyId, type Party } from '@/models';
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';
import fs from 'fs';

const parsePAP = async () => {
  return parsePDF(
    'src/data/manifestos/pap-manifesto-2020.pdf',
    'src/data/manifestos/pap-manifesto-2020.txt',
    PARTIES[PartyId.PAP],
    2020,
  );
};

const parseWP = async () => {
  return parsePDF(
    'src/data/manifestos/wp-manifesto-2020.pdf',
    'src/data/manifestos/wp-manifesto-2020.txt',
    PARTIES[PartyId.WP],
    2020,
  );
};

const parsePSP = async () => {
  return parsePDF(
    'src/data/manifestos/psp-manifesto-2020.pdf',
    'src/data/manifestos/rdr-manifesto-2020.txt',
    PARTIES[PartyId.PSP],
    2020,
  );
};

const parseRP = async () => {
  return parsePDF(
    'src/data/manifestos/rp-manifesto-2020.pdf',
    'src/data/manifestos/rp-manifesto-2020.txt',
    PARTIES[PartyId.RP],
    2020,
  );
};

const parseNSP = async () => {
  return parsePDF(
    'src/data/manifestos/nsp-manifesto-2020.pdf',
    'src/data/manifestos/nsp-manifesto-2020.txt',
    PARTIES[PartyId.NSP],
    2020,
  );
};

const parseRDU = async () => {
  return parsePDF(
    'src/data/manifestos/rdu-manifesto-2020.pdf',
    'src/data/manifestos/rdu-manifesto-2020.txt',
    PARTIES[PartyId.RDU],
    2020,
  );
};

const parseSPP = async () => {
  return parsePDF(
    'src/data/manifestos/spp-manifesto-2020.pdf',
    'src/data/manifestos/spp-manifesto-2020.txt',
    PARTIES[PartyId.SPP],
    2020,
  );
};

const parsePDF = async (pdfInPath: string, txtOutPath: string, party: Party, year: number) => {
  const loader = new PDFLoader(pdfInPath);
  const docs = await loader.load();

  const header = `Party: ${party.name} (${party.id})\nYear: ${year}\n\n`;

  const textContent = docs.map((doc: { pageContent: string }) => doc.pageContent).join('\n');

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
