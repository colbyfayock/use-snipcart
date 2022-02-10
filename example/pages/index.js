import Head from 'next/head';

import { useSnipcart } from '../../use-snipcart';

import { toCamel } from '../lib/util';

import hookConfig from '../../use-snipcart/package.json';

export default function Index() {
  const { name, description, repository = {}, author = {} } = hookConfig;

  const { name: authorName, url: authorUrl } = author;

  const { url: repositoryUrl } = repository;
  const repositoryExists = typeof repositoryUrl === 'string';

  const repositoryUrlDisplay = repositoryExists && repositoryUrl.split('://')[1];

  const { cart = {} } = useSnipcart();
  const { subtotal = '0.00' } = cart;

  return (
    <main>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.css" />
      </Head>
      <style jsx global>{`
        body {
          font-family: sans-serif;
          padding: 0;
          margin: 0;
        }

        main {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1em 0;
        }

        h1 {
          font-size: 2em;
        }

        img {
          max-width: 100%;
        }

        pre {
          overflow: auto;
          max-height: 15em;
          background-color: #eeeeee;
          padding: 1em;
        }

        section,
        footer {
          width: 100%;
          max-width: 50em;
          margin: 0 auto;
        }

        footer p {
          font-size: .9em;
        }

        footer p,
        footer a {
          color: #546e7a;
        }
      `}</style>

      <section>

        <h1>{ toCamel(name) }</h1>

        <p>{ description }</p>

        { repositoryExists && (
          <p>
            <a href={repositoryUrl}>
              { repositoryUrlDisplay }
            </a>
          </p>
        )}

        <h2>How to use</h2>

        <p>
          Add your instructions here!
        </p>

        <h2>Examples</h2>


        <ul>
          <li>
            <h3>My Cool Product</h3>
            <p>
              $99.99
            </p>
            <p>
              <button
                className="snipcart-add-item"
                data-item-id="my_cool_product"
                data-item-name="My Cool Product"
                data-item-url="/products/my-cool-product"
                data-item-price="99.99">
                  Add to Cart
              </button>
            </p>
          </li>
          <li>
            <h3>My Other Product</h3>
            <p>
              $49.99
            </p>
            <p>
              <button
                className="snipcart-add-item"
                data-item-id="my_other_product"
                data-item-name="My Other Product"
                data-item-url="/products/my-other-product"
                data-item-price="49.99">
                  Add to Cart
              </button>
            </p>
          </li>
        </ul>

        <p>
          <button className="snipcart-checkout snipcart-summary">
            <strong className="sr-only">Cart</strong>
          </button>
        </p>

        <p>
          <strong>Input:</strong>
        </p>
        <pre>
          <code>
{`const { cart = {} } = useSnipcart();
const { subtotal = '0.00' } = cart;`}
          </code>
        </pre>
        <p>
          <strong>Output:</strong>
        </p>
        <p>
          Subtotal: ${ subtotal }
        </p>
      </section>

      <footer>
        <p>
          Made by <a href={authorUrl}>{ authorName }</a>
        </p>
      </footer>

      <script async src="https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.js" />
      <div hidden id="snipcart" data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY} data-config-modal-style="side" />
    </main>
  );

}