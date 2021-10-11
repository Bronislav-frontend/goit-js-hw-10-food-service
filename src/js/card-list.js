import cards from './menu.json'
import cardsTemplates from '../templates/cards.hbs'

const addCardListMarkup = (cards) => {
    return cardsTemplates(cards)
}

export const cardListMarkup = addCardListMarkup(cards)