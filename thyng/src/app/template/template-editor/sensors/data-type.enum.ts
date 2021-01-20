export enum DataType {
    NUMBER = 'Number',
    BOOLEAN = 'Boolean',
    TEXT = 'Text'
}

export namespace DataType {

    export function values() {
      return Object.keys(DataType).filter(
        (type) => isNaN(<any>type) && type !== 'values'
      );
    }
  }
  