#include <iostream>
#include <vector>

int linearSearch(const std::vector<int>& arr, int target) {
    for (size_t i = 0; i < arr.size(); ++i) {
        if (arr[i] == target) {
            return static_cast<int>(i); // return index when found
        }
    }
    return -1; // not found
}

int main() {
    std::vector<int> numbers = {12, 7, 9, 21, 15, 3, 10};
    int target;

    std::cout << "Enter the number to search: ";
    std::cin >> target;

    int index = linearSearch(numbers, target);
    if (index != -1) {
        std::cout << "Number " << target << " found at index " << index << ".\n";
    } else {
        std::cout << "Number " << target << " not found in the array.\n";
    }

    return 0;
}
