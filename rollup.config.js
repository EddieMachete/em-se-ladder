/**
 * @license
 * Copyright (c) 2020 Eduardo Echeverría. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

import copyfiles from 'copyfiles';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';

const dir = 'build';
const tsconfig = {
  paths: {
    "@app/*": ["src/app/*"],
    "@core/*": ["src/core/*"],
    "@ui/*": ["src/ui/*"],
  }
};

export default {
  input: 'src/index.ts',
  output: {
    dir: dir + '/scripts',
    entryFileNames: 'bundle.js',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript(tsconfig),
    {
      name: 'copy-assets',
      buildEnd(error) {
        if (error) {
          console.error(error);
        } else {
          copyfiles(['assets/**/*', dir], {up: 1} , (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log('\x1b[32m' + `assets/**/* were copied to ${dir}` + '\x1b[0m');
            }
          });
        }
      }
    },
  ],
};