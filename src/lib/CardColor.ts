export enum Card_Color {
    RED = "Red",
    GREEN = "Green",
    BLUE = "Blue",
    WHITE = "White",
    BLACK = "Black",
};

export function random_color() {
    let color_list = [Card_Color.RED, Card_Color.GREEN, Card_Color.BLUE, Card_Color.WHITE, Card_Color.BLACK];
    return color_list[Math.floor(Math.random() * color_list.length)];
};