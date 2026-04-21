import fs from "fs";
import path from "path";

const resourceFiles = [
  { filename: "4th-5th-schedule-amended.pdf" },
  { filename: "assets-declaration-rules-2019.pdf" },
  { filename: "pos-integration-retailers.pdf" },
  { filename: "wht-rate-card-2025.pdf" },
  { filename: "sro-428-online-integration.pdf" },
  { filename: "sales-tax-act-2025-26.pdf" },
  { filename: "sales-tax-special-procedure-rules.pdf" },
  { filename: "sales-tax-withholding-rules.pdf" },
  { filename: "sindh-online-integration-rules.pdf" },
  { filename: "sindh-sales-tax-act-2025-26.pdf" },
  { filename: "sindh-sales-tax-rules-2025-26.pdf" },
  { filename: "sindh-sales-tax-special-procedure.pdf" },
  { filename: "sindh-sales-tax-withholding-rules.pdf" },
  { filename: "sindh-sales-tax-withholding-rules-alt.pdf" },
  { filename: "llp-act-2017.pdf" },
  { filename: "llp-amendments-2020.pdf" },
  { filename: "companies-act-3rd-schedule.pdf" },
  { filename: "companies-act-7th-schedule.pdf" },
  { filename: "anti-money-laundering-act-2010.pdf" },
  { filename: "benami-transactions-act-2017.pdf" },
  { filename: "benami-transactions-rules-2019.pdf" },
  { filename: "customs-act-1969.pdf" },
];

const docsDir = "public/docs";
const filesInDir = fs.readdirSync(docsDir);

console.log("Checking files...");
resourceFiles.forEach((file) => {
  if (filesInDir.includes(file.filename)) {
    console.log(`[OK] ${file.filename}`);
  } else {
    console.log(`[MISSING] ${file.filename}`);
  }
});

console.log("\nFiles in directory not in list:");
filesInDir.forEach((file) => {
  if (!resourceFiles.find((f) => f.filename === file)) {
    console.log(`[EXTRA] ${file}`);
  }
});
