
function printCombination( arr,  n,  r)
{

    var data=[];
 
    // Print all combination using temprary array 'data[]'
    combinationUtil(arr, data, 0, n-1, 0, r);
}
 
/* arr[]  ---> Input Array
   data[] ---> Temporary array to store current combination
   start & end ---> Staring and Ending indexes in arr[]
   index  ---> Current index in data[]
   r ---> Size of a combination to be printed */
function combinationUtil(arr,  data,  start,  end,
                      index,  r)
{
    // Current combination is ready to be printed, print it
    if (index == r)
    {
        console.log(data);
        return;
    }
 
    // replace index with all possible elements. The condition
    // "end-i+1 >= r-index" makes sure that including one element
    // at index will make a combination with remaining elements
    // at remaining positions
    for (int i=start; i<=end && end-i+1 >= r-index; i++)
    {
        data[index] = arr[i];
        combinationUtil(arr, data, i+1, end, index+1, r);
    }
}

var arr=[0,1,2,3,4];
printCombination(arr,5,3);


//////////////////
    var people=[],combination=[];
    function go(offset, k) {
        if (k == 0) {
            console.log(combination);
            return;
        }
        for (i = offset; i <= people.length - k; ++i) {
            combination.push(people[i]);
            go(i + 1, k - 1);
            combination.pop();
        }
    }

    function main() {
        var n = 5, k = 3;

        for (i = 0; i < n; ++i) {
            people.push(i + 1);
        }
        go(0, k);

        return 0;
    }
    main();

////////////////
function k_combinations(set, k) {
	var i, j, combs, head, tailcombs;
	
	// There is no way to take e.g. sets of 5 elements from
	// a set of 4.
	if (k > set.length || k <= 0) {
		return [];
	}
	
	// K-sized set has only one K-sized subset.
	if (k == set.length) {
		return [set];
	}
	
	// There is N 1-sized subsets in a N-sized set.
	if (k == 1) {
		combs = [];
		for (i = 0; i < set.length; i++) {
			combs.push([set[i]]);
		}
		return combs;
	}
	
	combs = [];
	for (i = 0; i < set.length - k + 1; i++) {
		// head is a list that includes only our current element.
		head = set.slice(i, i + 1);
		// We take smaller combinations from the subsequent elements
		tailcombs = k_combinations(set.slice(i + 1), k - 1);
		// For each (k-1)-combination we join it with the current
		// and store it to the set of k-combinations.
		for (j = 0; j < tailcombs.length; j++) {
			combs.push(head.concat(tailcombs[j]));
		}
	}
	return combs;
}