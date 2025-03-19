import fs from 'node:fs';
import type { Party } from '@/models/party';
import { partiesSchema } from '@/models/party';
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';

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
  const partiesData = JSON.parse(fs.readFileSync('data/parties.json', 'utf-8'));
  const parties = partiesSchema.parse(partiesData);

  const year = 2020;
  const partiesToParse = [
    { id: 'PAP', pdf: 'pap-manifesto-2020.pdf', txt: 'pap-manifesto-2020.txt' },
    { id: 'WP', pdf: 'wp-manifesto-2020.pdf', txt: 'wp-manifesto-2020.txt' },
    { id: 'PSP', pdf: 'psp-manifesto-2020.pdf', txt: 'psp-manifesto-2020.txt' },
    { id: 'RP', pdf: 'rp-manifesto-2020.pdf', txt: 'rp-manifesto-2020.txt' },
    { id: 'NSP', pdf: 'nsp-manifesto-2020.pdf', txt: 'nsp-manifesto-2020.txt' },
    { id: 'RDU', pdf: 'rdu-manifesto-2020.pdf', txt: 'rdu-manifesto-2020.txt' },
    { id: 'SPP', pdf: 'spp-manifesto-2020.pdf', txt: 'spp-manifesto-2020.txt' },
  ];

  for (const party of partiesToParse) {
    const partyData = parties[party.id];
    if (!partyData) {
      console.warn(`Party ${party.id} not found in parties data`);
      continue;
    }

    await parsePDF(
      `data/manifestos/${party.pdf}`,
      `data/manifestos/${party.txt}`,
      partyData,
      year,
    );
  }
};

main();
