#!/usr/bin/env node
import React from 'react';
//import {render} from 'ink';
//import meow from 'meow';
import App from './app.js';
import {withFullScreen} from 'fullscreen-ink';

//const cli = meow(
//	`
//	Usage
//	  $ terminal-notion
//
//	Options
//		--name  Your name
//
//	Examples
//	  $ terminal-notion --name=Jane
//	  Hello, Jane
//`,
//	{
//		importMeta: import.meta,
//		flags: {
//			name: {
//				type: 'string',
//			},
//		},
//	},
//);
//
//render(<App />);
withFullScreen(<App />).start();
