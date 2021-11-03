import {EventEmitter} from '@angular/core';

export class AuthEmitter {
    static authEmitter = new EventEmitter<boolean>();
}
