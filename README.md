# Capstone React project on Udemy Course

Started: 7/17/23

I really need to just dive in and stop suffering through the basics, I feel
I go a prety good grasp on it now.

Anything I don't know I will figure out.

# useState

You need a call to setState for each value that you have.

First you need to Import it:

`import { useState } from 'react'`

Then to initialize it you do this within your functional component

`const [variable, setVariable] = useState(<initialValue>)`

Then to change the value you will call:

`setVariable(value)`

## how to prevent infinite reRender

This is done using the `useEffect` hook.

import it first:

`import {useState, useEffect} from 'react'`

the useEffect functio takes two arguments. the first is a callback function and the second is an
array of dependencies.

`useEffect(() => {}, [])`

Whenever the values inside the dependency array change, that is when I will run this function.
