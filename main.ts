//% weight=0 color=#2949c6 icon="\uf11c" block="KeyPad"
namespace keypad {
    let rows: DigitalPin[] = [DigitalPin.P8, DigitalPin.P12, DigitalPin.P13, DigitalPin.P14];
    let columns: DigitalPin[] = [DigitalPin.P0, DigitalPin.P1, DigitalPin.P2 , DigitalPin.P15];
    let dataStr: string[][] = [
        ["1", "4", "7", "*"],
        ["2", "5", "8", "0"],
        ["3", "6", "9", "#"],
        ["A", "B", "C", "D"]
    ];
    let maxPins=3;

    //% blockId=setKeyPad3 block="set 3*4 KeyPad pins : pin1 %pin1|pin2 %pin2|pin3 %pin3|pin4 %pin4|pin5 %pin5|pin6 %pin6|pin7 %pin7" blockExternalInputs=false
    //% weight=70
    //% pin1.fieldEditor="gridpicker" pin1.fieldOptions.columns=4
    //% pin2.fieldEditor="gridpicker" pin2.fieldOptions.columns=4
    //% pin3.fieldEditor="gridpicker" pin3.fieldOptions.columns=4
    //% pin4.fieldEditor="gridpicker" pin4.fieldOptions.columns=4
    //% pin5.fieldEditor="gridpicker" pin5.fieldOptions.columns=4
    //% pin6.fieldEditor="gridpicker" pin6.fieldOptions.columns=4
    //% pin7.fieldEditor="gridpicker" pin7.fieldOptions.columns=4
    export function setKeyPad3(pin1: DigitalPin, pin2: DigitalPin, pin3: DigitalPin, pin4: DigitalPin, pin5: DigitalPin, pin6: DigitalPin, pin7: DigitalPin): void {
        rows[0] = pin4;
        rows[1] = pin5;
        rows[2] = pin6;
        rows[3] = pin7;
        columns[0] = pin1;
        columns[1] = pin2;
        columns[2] = pin3;
        maxPins=3;
    }

    //% blockId=getKeyString block="KeyPad value(string)"
    export function getKeyString(): string {
        let myString = "";
        for (let i = 0; i < maxPins; i++) {
            for (let x = 0; x < maxPins; x++) {
                pins.digitalWritePin(columns[x], (x == i ? 1 : 0));
            }
            for (let x = 0; x < rows.length; x++) {
                if (pins.digitalReadPin(rows[x]) == 1) {
                    myString = dataStr[i][x];
                }
            }
        }
        return myString;
    }
}       
