#include <iostream>
#include <vector>

int linearSearch(const std::vector<int>& arr, int target) {
    for (size_t i = 0; i < arr.size(); ++i) {
        if (arr[i] == target) {
            return static_cast<int>(i); 
        }
    }
    return -1; 
}

int main() {
    int n;
    std::cout << "Enter the number of elements: ";
    std::cin >> n;

    std::vector<int> elements(n);
    std::cout << "Enter " << n << " elements:\n";
    for (int i = 0; i < n; ++i) {
        std::cin >> elements[i];
    }

    int target;
    std::cout << "Enter the element to search: ";
    std::cin >> target;

    int index = linearSearch(elements, target);
    if (index != -1) {
        std::cout << "Element " << target << " is found at position " << (index + 1) << ".\n";
    } else {
        std::cout << "Element " << target << " is not found in the list.\n";
    }

    return 0;
}
