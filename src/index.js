// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let answer = {};
    const H = 50;
    const Q = 25;
    const D = 10;
    const N = 5;
    const P = 1;
    if (currency <= 0) return answer;
    if (currency >= 10000) return {
        error: "You are rich, my friend! We don't have so much coins for exchange"
    };
    if (currency >= H) {
        answer["H"] = Math.floor(currency / H);
        currency = currency - Math.floor(answer["H"] * H);
    }
    if (currency >= Q) {
        answer["Q"] = Math.floor(currency / Q);
        currency = currency - Math.floor(answer["Q"] * Q);
    }
    if (currency >= D) {
        answer["D"] = Math.floor(currency / D);
        currency = currency - Math.floor(answer["D"] * D);
    }
    if (currency >= N) {
        answer["N"] = Math.floor(currency / N);
        currency = currency - Math.floor(answer["N"] * N);
    }
    if (currency >= P) {
        answer["P"] = Math.floor(currency * P);
    }
    return (answer);
}
