/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// There is a bug when using npm to install: the execution of preinstall is after install, so when this prompt is displayed, the dependent packages have already been installed.

require('./loadPlugins');

if (!/pnpm/.test(process.env.npm_execpath)) {
  console.warn(
    `\u001b[33mThis repository requires using pnpm as the package manager for scripts to work properly.\u001b[39m\n`,
  );
  process.exit(1);
}
