import { createWriteStream, WriteStream } from 'node:fs';
import { FileWriterInterface } from './file-writer.interface.js';
import { FileOperations } from '../../consts/files.js';
const CHUNK_SIZE_IN_BYTES = 128;
const LINE_SEPARATOR = '\n';


export default class StringFileWriter implements FileWriterInterface {
  private stream: WriteStream;


  constructor(public readonly filename: string) {
    this.stream = createWriteStream(this.filename, {
      flags: 'w',
      encoding: 'utf8',
      highWaterMark: FileOperations.WriteStreamChunkSizeInBytes,
      autoClose: true,
    });
  }


  public async write(row: string): Promise<void> {
    row = row.replaceAll(LINE_SEPARATOR, ' ');
    const isWritten = this.stream.write(`${row}${LINE_SEPARATOR}`);

    if (!isWritten) {
      return new Promise((resolve) => {
        this.stream.once('drain', () => resolve());
      });
    }
    return Promise.resolve();
  }
}
