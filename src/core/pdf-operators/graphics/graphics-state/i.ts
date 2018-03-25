/* eslint-disable new-cap */
import PDFOperator from 'core/pdf-operators/PDFOperator';

import { addStringToBuffer } from 'utils';
import { isInRange, validate } from 'utils/validate';

/**
Set the flatness tolerance in the graphics state. flatness is a number in the
range 0 to 100; a value of 0 shall specify the output device’s default flatness
tolerance.
*/
class i extends PDFOperator {
  public flatness: number;

  constructor(flatness: number) {
    super();
    validate(
      flatness,
      isInRange(0, 101),
      'i operator arg "flatness" must be a number from 0 to 100.',
    );
    this.flatness = flatness;
  }

  public static of = (flatness: number) => new i(flatness);

  public toString = (): string => `${this.flatness} i\n`;

  public bytesSize = (): number => this.toString().length;

  public copyBytesInto = (buffer: Uint8Array): Uint8Array =>
    addStringToBuffer(this.toString(), buffer)
}

export default i;
