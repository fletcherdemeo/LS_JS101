function playerTurn(hand, dealer, deck) {
  let dealerCard = sumCards(dealer.slice(0, 1));

  // Soft totals - https://www.blackjackapprenticeship.com/blackjack-strategy-charts/
  while (
    hand.some(card => card.value === "A") && 
    ((sumCards(hand) === 18 && dealerCard >= 9) ||
      (sumCards(hand) >= 13 && sumCards(hand) <= 17))
  ) {
    [card, deck] = issueCard(deck);
    hand.push(card);
  }

  // Hard totals - https://www.blackjackapprenticeship.com/blackjack-strategy-charts/
  while (
    (sumCards(hand) <= 16 && sumCards(hand) >= 13 && dealerCard > 6) ||
      (sumCards(hand) === 12 && (dealerCard > 6 || dealerCard < 4)) ||
      (sumCards(hand) <= 11)
  ) {
    [card, deck] = issueCard(deck);
    hand.push(card);
  }

  return [hand, deck];
}
