import { mkdirSync, writeFileSync } from "node:fs";

const line = "Grandpa's hearing aid turned every 'I love you' into a weather report.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
