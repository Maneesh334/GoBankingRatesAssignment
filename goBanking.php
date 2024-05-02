<?php
// Given two strings of the same length, find the minimum number of steps to make one string an anagram of the other.
class Solution {
    function minSteps($str1, $str2) {
        // Declare two associate arrays with 26 elements, each element in an array indicates the number of times that particular character in the alphabet appears in the string
        $characterFrequencyA = array_fill(0, 26, 0);
        $characterFrequencyB = array_fill(0, 26, 0);
        
        $strlength = strlen($str1);
        #Iterate through all characters in both strings, keep track of the number of times each character is present in the string
        for ($i = 0; $i < $strlength; $i++) {
            $index = ord($str2[$i]) - ord('a');
            $characterFrequencyA[$index]++;
        }
        
        for ($i = 0; $i < $strlength; $i++) {
            $index = ord($str1[$i]) - ord('a');
            $characterFrequencyB[$index]++;
        }
        
        #Iterate through both arrays, update the number of steps by measuring the difference in character frequency
        $steps = 0;
        for ($i = 0; $i < 26; $i++) {
            $steps += abs($characterFrequencyA[$i] - $characterFrequencyB[$i]);
        }
        
        return $steps / 2;
    }
}

#Initialize solution object
$solution = new Solution();
#Take two strings as input and remove newline character from string input
echo "Enter a string: \n";
$str1 = fgets(STDIN);
$str1 = rtrim($str1, "\n");
echo "Enter another string of the same length: \n";
$str2 = fgets(STDIN);
$str2 = rtrim($str2, "\n");
#Pass input to function and output result
echo $solution->minSteps($str1, $str2);