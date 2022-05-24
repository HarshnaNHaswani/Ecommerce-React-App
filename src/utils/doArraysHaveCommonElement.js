import React from 'react'

export const doArraysHaveCommonElement = (arr1, arr2) =>  arr1.some(item => arr2.includes(item))