console.log('start test');


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