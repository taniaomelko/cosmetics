import React from 'react';
import propTypes from 'prop-types';
import './CosmeticsCard.css';

export class CosmeticsCard extends React.Component {
  state = {
    quantity: 1,
    isCompared: {
      1: false,
      2: false,
      3: false,
    },
  }

  addItem = () => {
    this.setState(prevState => (
      { quantity: prevState.quantity + 1 }
    ));
  }

  subtractItem = () => {
    if (this.state.quantity === 1) {
      return;
    }

    this.setState(prevState => (
      { quantity: prevState.quantity + 1 }
    ));
  }

  compare = (id) => {
    this.setState(prevState => (
      // eslint-disable-next-line
      { isCompared: { [id]: !prevState.isCompared[id], }}
    ));
  }

  render() {
    const { id, title, description, colors, price, volume } = this.props.item;
    const { quantity, isCompared } = this.state;

    return (
      <div className="card">
        <div className="card__new">
          New
        </div>
        <button
          type="button"
          className={isCompared[id]
            ? 'card__compare card__compare--done' : 'card__compare'}
          onClick={() => this.compare(id)}
        />
        <div className={`card__img card__img--${id}`} />
        <h4 className="card__title">
          {title}
        </h4>
        <div className="card__description">
          {description}
        </div>

        <div className="card__info">
          <select className="card__select">
            <option>Цвет</option>
            {colors.map(color => (
              <option>{color}</option>
            ))}
          </select>
          <div className="card__price">
            {`${price} грн`}
          </div>
          <div className="card__volume">
            <label>
              <input
                type="checkbox"
                className="card__input"
                checked
              />
              100 мл
            </label>
            {volume.map(vol => (
              <label>
                <input
                  type="checkbox"
                  className="card__input"
                />
                {`${vol} мл`}
              </label>
            ))}
          </div>
        </div>

        <div className="card__buttons">
          <div
            className="card__quantity"
          >
            <button
              type="button"
              className="card__operator"
              onClick={this.subtractItem}
            >
              -
            </button>
            {quantity}
            <button
              type="button"
              className="card__operator"
              onClick={this.addItem}
            >
              +
            </button>
          </div>

          <button
            type="button"
            className="card__button"
          >
            Купить
          </button>
        </div>
      </div>
    );
  }
}

CosmeticsCard.propTypes = {
  item: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    colors: propTypes.arrayOf(
      propTypes.string.isRequired,
    ).isRequired,
    price: propTypes.number.isRequired,
    volume: propTypes.arrayOf(
      propTypes.number.isRequired,
    ).isRequired,
  }).isRequired,
};
