// Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

// You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

 

// Example 1:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".
// Example 2:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
 

// Constraints:

// 1 <= list1.length, list2.length <= 1000
// 1 <= list1[i].length, list2[i].length <= 30
// list1[i] and list2[i] consist of spaces ' ' and English letters.
// All the stings of list1 are unique.
// All the stings of list2 are unique.


var findRestaurant = function(list1, list2) {
  let restaurants = []
  let indexSum = 10000
  
  // create a indexSum variable
  for (const list1WordIndex in list1) {
      // iterate on each item in list one finding for matches
      const indexOfWordInList2 = list2.indexOf(list1[list1WordIndex])
      const sum = indexOfWordInList2 + parseInt(list1WordIndex)
      
      // on each match, only save it's position if its less than the last match 
      if (indexOfWordInList2 !== -1 && (indexSum >= (indexOfWordInList2 + parseInt(list1WordIndex)))) {

        if ((indexSum === (indexOfWordInList2 + parseInt(list1WordIndex)))) {
          restaurants.push(list1[list1WordIndex])
        } else {
          restaurants = [list1[list1WordIndex]]
        }

        indexSum = sum
      }
  }
  
  return restaurants
};

console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"],
["KFC","Burger King","Tapioca Express","Shogun"]))