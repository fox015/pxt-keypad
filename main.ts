//% weight=0 color=#2949c6 icon="\uf11c" block="KeyPad"
namespace keypad {
    let rows: DigitalPin[] = [DigitalPin.P8, DigitalPin.P12, DigitalPin.P13, DigitalPin.P16];
    let columns: DigitalPin[] = [DigitalPin.P0, DigitalPin.P1, DigitalPin.P2 , DigitalPin.P15];
    let dataStr: string[][] = [
        ["1", "4", "7", "*"],
        ["2", "5", "8", "0"],
        ["3", "6", "9", "#"],
        ["A", "B", "C", "D"]
    ];
    let maxPins=3;

    //% blockId=setKeyPad3 block="configure pins: row1 %row1|row2 %row2|row3 %row3|row4 %row4|col1 %col1|col2 %col2|col3 %col3" blockExternalInputs=false
    //% weight=70
    //% pin1.fieldEditor="gridpicker" pin1.fieldOptions.columns=4
    //% pin2.fieldEditor="gridpicker" pin2.fieldOptions.columns=4
    //% pin3.fieldEditor="gridpicker" pin3.fieldOptions.columns=4
    //% pin4.fieldEditor="gridpicker" pin4.fieldOptions.columns=4
    //% pin5.fieldEditor="gridpicker" pin5.fieldOptions.columns=4
    //% pin6.fieldEditor="gridpicker" pin6.fieldOptions.columns=4
    //% pin7.fieldEditor="gridpicker" pin7.fieldOptions.columns=4
    export function setKeyPad3(row1: DigitalPin, row2: DigitalPin, row3: DigitalPin, row4: DigitalPin, col1: DigitalPin, col2: DigitalPin, col3: DigitalPin): void {
        rows[0] = row1;
        rows[1] = row2;
        rows[2] = row3;
        rows[3] = row4;
        columns[0] = col1;
        columns[1] = col2;
        columns[2] = col3;
        maxPins=3;
    }

    //% blockId=getKeyString block="key"
    export function getKeyString(): string {
        let myString = "";
        // Scan through all columns.
        for (let i = 0; i < maxPins; i++) {
            // Set all column pins low except for current column.
            for (let x = 0; x < maxPins; x++) {
                pins.digitalWritePin(columns[x], (x == i ? 1 : 0));
            }
            // Scan rows.
            for (let x = 0; x < rows.length; x++) {
                if (pins.digitalReadPin(rows[x]) == 1) {
                    myString = dataStr[i][x];
                }
            }
        }
        return myString;
    }
}       
