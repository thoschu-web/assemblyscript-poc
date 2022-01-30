// The entry file of your WebAssembly module.
import {  } from 'assemblyscript';

export declare function letterCount(text: string, option: string): string

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function concat(a: string, b: string): string {
  return a + b;
}

declare function log(message: string): void;
// Import the JS log function. (console.log)

export function test(text: string): string {
  log(text);
  log(letterCount(text, '-a'));
  return letterCount(text, '-a');
}

export declare function lcc(text: string, option: string): string

export function foo(text: string): string {
  return lcc(text, '-a');
}