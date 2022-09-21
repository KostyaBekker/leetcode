console.log('start LEETCODE');


//Roman to Integer////////////////////////////////////

function romanToInt(s) {
    let result = 0;
    const map = {
      'I':1,
      'V':5,
      'X':10,
      'L':50,
      'C':100,
      'D':500,
      'M':1000
    };
    for(let i = 0; i < s.length; i++){
      if (i === s.length - 1){
        result += map[s[i]];
      } else{
        if (map[s[i]] >= map[s[i+1]]){
            result += map[s[i]];
        } else{
            result -= map[s[i]];
        }
      }
    }
    return console.log(result);
};
// romanToInt('MCMXCIII');

//////////////////////////////////////////////////////


//isPalindrome////////////////////////////////////////

function isPalindrome(x) {
  console.log(x.toString() === x.toString().split('').reverse().join(''));
  console.log(x.toString(), x.toString().split('').reverse().join(''));
};
// isPalindrome('10');

//////////////////////////////////////////////////////


//longestCommonPrefix/////////////////////////////////

function longestCommonPrefix(strs) {
  console.log(strs.sort());
  if(strs.length === 1) return strs[0];
  let prefix = "";

  for(let i=0; i < strs[0].length; i++){
      if (strs[0][i] === strs[strs.length-1][i]){
        prefix += strs[0][i];
      } else {
        return prefix;
      }
  }

  return prefix;
};

// console.log(longestCommonPrefix(["flofmnmn", "flofmn", "flofghtmn"]));

/////////////////////////////////////////////////////////

//Merge Sorted Array/////

function mergeSortedArray(nums1, m, nums2, n) {
  if (!nums2.length) {
    return;
  }

  let nums1MergeInd = m + n - 1;
  let nums1Ind = m - 1;
  let nums2Ind = n - 1;

  while (nums2Ind > -1) {
    if (nums1[nums1Ind] !== undefined && nums1[nums1Ind] > nums2[nums2Ind]) {
      nums1[nums1MergeInd] = nums1[nums1Ind];
      nums1Ind--;
    } else {
      nums1[nums1MergeInd] = nums2[nums2Ind];
      nums2Ind--;
    }
    nums1MergeInd--;
  }

  if (nums2Ind === -1) {
    console.log(nums1);
  }
  
  
}

// mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

////////////////////////////////////////////////////////

//missingNumber//////////////////////////////////////////
function missingNumber(nums, target) {
  let obj={};
  for (let i=0; i< nums.length; i++) {
    let diff = target - nums[i];
    if (diff in obj) {
      return [obj[diff],i];
    } else {
      obj[nums[i]] = i;
    }
  }
}

// console.log(missingNumber([2,7,11,15], 18))

////////////////////////////////////////////////////////


//Valid Parentheses////////////////////////////////////

function validParentheses(value) {
  let brac = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  let stack = []
  
  for (let i of value) {
    if (brac[i]) {
      stack.push(brac[i])
    } else {
      if (stack.pop() !== i) {
        console.log(false);
        return false
      }
    }
  }
  // return !stack.length
  // console.log(!stack.length);
}

// validParentheses("({})]");

////////////////////////////////////////////////////////


//searchInsert/////////////////////////////////////////
function searchInsert(arr, value) {
  // let index = arr.indexOf(value);
  // if (index === -1) {
  //   arr.push(value);
  //   arr.sort((a, b) => a - b);
  //   index = arr.indexOf(value);
  // }
  // console.log(index);

  //solutin2
  let p = 0;
  while( p < arr.length ) {
      if( value <= arr[p] ) {
        return console.log(p);
      }
      else if( value > arr[p] ) {
          p++;
      }
  }
  return console.log(p);
}

// searchInsert([1, 3, 5, 6], 5);
////////////////////////////////////////////////////////


//removeElement//////////////////////////////////////////
var removeElement = function(nums, val) {
    let firstDiffNum = 0;
    
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === val){
            continue;
        }
        
        nums[firstDiffNum] = nums[i];
        firstDiffNum += 1;
        
    }
    
    return console.log(firstDiffNum);
};
// removeElement([2,2,5,6], 2);
////////////////////////////////////////////////////////

//lengthOfLastWord//////////////////////////////////////
var lengthOfLastWord = function(s) {
  let len;
  len = s.trim().length - s.trim().lastIndexOf(" ") - 1;
  console.log(len)
  //or
  console.log(s.trim().split(' ').pop().length)
};
// lengthOfLastWord("luffy is still joyboy");
////////////////////////////////////////////////////////

///plusOne/////////////////////////////////////////////
var plusOne = function(digits) {
  // let newArr = ((Number(digits.join('')) + 1).toString()).split('');
  // console.log(newArr);

  let current = digits.length-1;
    
    function increment(digits,current){
        if(digits[current] === 9 && current > 0){
            digits[current] = 0;
            current--;
            increment(digits,current);
        } else if(digits[current] === 9){
            digits[current] = 0;
            digits.unshift(1);
        } else{
            digits[current]++
        }
        
    }
    increment(digits,current);
    return console.log(digits);
};

// plusOne([6,1,4,5]);
////////////////////////////////////////////////////////