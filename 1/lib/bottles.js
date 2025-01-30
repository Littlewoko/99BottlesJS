import { downTo, capitalize } from './helpers';

export class Bottles {
    verse(num) {
        let remaining = num - 1;
        let res = '';
        
        res += getFirstLine(num);
        res += getSecondLine(num);
        res += getThirdLine(num);

        res += getFourthLine(remaining);

        return res;
    }

    verses(start, end) {
        let res = '';
        for (let i of downTo(start, end)) {
            res += this.verse(i);

            if(i !== end) {
                res += '\n';
            }
        }
        return res;
    }

    song() {
        return this.verses(99, 0);
    }
}

function getBottleText(numBottles) {
    let str = '';
    if (numBottles === 0) {
        str += 'no more bottles';
    } else if (numBottles === 1) {
        str += '1 bottle';
    } else {
        str += `${numBottles} bottles`;
    }

    return str + ' of beer';
}

function getFirstLine(numBottles) {
    let str = '';
    str += `${getBottleText(numBottles)} on the wall, `;
    return capitalize(str);
}

function getSecondLine(numBottles) {
    let str = '';
    str += `${getBottleText(numBottles)}.\n`;
    return str;
}

function getThirdLine(numBottles) {
    if (numBottles > 1) {
        return 'Take one down and pass it around, ';
    } else if (numBottles === 1) {
        return 'Take it down and pass it around, ';
    } else {
        return 'Go to the store and buy some more, ';
    }
}

function getFourthLine(numBottles) {
    if(numBottles >= 0) {
        return `${getBottleText(numBottles)} on the wall.\n`;
    } else {
        return `${getBottleText(99)} on the wall.\n`;
    }
}