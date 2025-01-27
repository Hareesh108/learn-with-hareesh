// Previously, nums: (number | null)[]
// Now, nums: number[]
const nums1 = [1, 2, 3, null, 5].filter(x => x !== null);
// nums1.push(null);  // ok in TS 5.4, error in TS 5.5


const nums2: (number | null)[] = [1, 2, 3, null, 5].filter(x => x !== null);
nums2.push(null);  // ok in all versions
nums2.push(10);  // ok in all versions

console.log(nums2,"nums2");



// const isNumber: (x: unknown) => x is number
const isNumber = (x: unknown) => typeof x === 'number';

// const isNonNullish: <T>(x: T) => x is NonNullable<T>
const isNonNullish = <T,N,K>(x: T) => x != null;


interface Bird {
    commonName: string;
    scientificName: string;
    sing(): void;
}
// Maps country names -> national bird.
// Not all nations have official birds (looking at you, Canada!)
declare const nationalBirds: Map<string, Bird>;
function makeNationalBirdCall(country: string) {
  const bird = nationalBirds.get(country);  // bird has a declared type of Bird | undefined
  if (bird) {
    bird.sing();  // bird has type Bird inside the if statement
  } else {
    // bird has type undefined here.
  }
}

function makeBirdCalls(countries: string[]) {
    // birds: (Bird | undefined)[]
    const birds = countries
      .map(country => nationalBirds.get(country))
      .filter(bird => bird !== undefined);
    for (const bird of birds) {
      bird.sing();  // error: 'bird' is possibly 'undefined'.
    }
  }

