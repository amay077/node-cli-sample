import * as fs from 'fs-extra'
import * as Path from 'path'

export class CommandVersion {
  exec(): number {
    const packageJsonPath = Path.resolve(__dirname, '../package.json');
    const content = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
    console.log(`VERSION: ${content.version}`);
    return 0;
  }
}  