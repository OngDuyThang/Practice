// To get started, we need a type which we'll use to extend
// other classes from. The main responsibility is to declare
// that the type being passed in is a class.

type Constructor = new (...args: any[]) => {};

// This mixin adds a scale property, with getters and setters
// for changing it with an encapsulated private property:

function Scale<T extends Constructor>(constructor: T) {
    // BELOW IS MIXIN CLASS
    return class extends constructor {
        // Mixins may not declare private/protected properties
        // however, you can use ES2020 private fields
        _scale = 1;

        set scale(newScale: number) {
            this._scale = newScale;
        }

        get scale(): number {
            return this._scale;
        }
    };
}