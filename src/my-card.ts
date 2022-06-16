import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-card')
export class MyCard extends LitElement {
	@property({ type: Number })
	count = 0;

	render() {
		return html`
			<slot></slot>
			<div class="card">
				<button @click=${this._onClick} part="button">
					count is ${this.count}
				</button>
			</div>
		`;
	}

	private _onClick() {
		this.count++;
	}

	static styles = css`
		:host {
			max-width: 1280px;
			margin: 0 auto;
			padding: 2rem;
			text-align: center;
			border: 1px solid gray;
			display: block;
			border-radius: 10px;
		}

		button {
			border-radius: 8px;
			border: 1px solid transparent;
			padding: 0.6em 1.2em;
			font-size: 1em;
			font-weight: 500;
			font-family: inherit;
			background-color: #1a1a1a;
			cursor: pointer;
			transition: border-color 0.25s;
			color: white;
			transition: 250ms;
		}
		button:hover {
			border-color: #646cff;
			transform: scale(1.05);
		}
		button:active {
			transform: scale(1);
		}
		button:focus,
		button:focus-visible {
			outline: 4px auto -webkit-focus-ring-color;
		}

		@media (prefers-color-scheme: light) {
			a:hover {
				color: #747bff;
			}
			button {
				background-color: #f9f9f9;
			}
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'my-element': MyCard;
	}
}
