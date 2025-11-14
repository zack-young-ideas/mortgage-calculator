import { useId, useState } from 'react';
import { NumericFormat } from 'react-number-format';

function FormField(props) {
  const id = useId();
  let output;

  // If the decimal prop is true, the FormField object can
  // accept dollar values as input
  if (props.decimal) {
    output = (<div className="mb-3">
      <label className="form-label"
             htmlFor={id}>{props.label}</label>
      <NumericFormat className="form-control"
                     decimalScale={2}
                     decimalSeparator='.'
                     fixedDecimalScale={true}
                     id={id}
                     onInput={(event) => props.setInput(event.target.value)}
                     prefix={props.prefix}
                     suffix={props.suffix}
                     thousandSeparator={true} />
    </div>);
  } else {
    output = (<div className="mb-3">
      <label className="form-label"
             htmlFor={id}>{props.label}</label>
      <NumericFormat className="form-control"
                     id={id}
                     onInput={(event) => props.setInput(event.target.value)}
                     prefix={props.prefix}
                     suffix={props.suffix} />
    </div>);
  }

  return output;
}

function Form(props) {
  // The Form class records the values of the four variables
  // needed to initialize new Mortgage objects
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [amortization, setAmortization] = useState(0);
  const [term, setTerm] = useState(0);

  function submit(event) {
    // When the user clicks "Submit", the values of the four
    // variables are updated
    event.preventDefault();
    const price = Number(purchasePrice.replace(/\$/g, '').replace(/,/g, ''));
    const down = Number(downPayment.replace(/%/g, ''));
    const rate = Number(interestRate.replace(/%/g, ''));
    const years = Number(amortization);
    const mortgageTerm = Number(term);
    props.submitData(price, down, rate, years, mortgageTerm);
  }

  return (
    <form>
      <FormField decimal={true}
                 label={'Purchase Price ($)'}
                 prefix={'$'}
                 setInput={setPurchasePrice}
                 suffix={''} />
      <FormField decimal={false}
                 label={'Down Payment (%)'}
                 prefix={''}
                 setInput={setDownPayment}
                 suffix={'%'} />
      <FormField decimal={false}
                 label={'Interest Rate (%)'}
                 prefix={''}
                 setInput={setInterestRate}
                 suffix={'%'} />
      <FormField decimal={false}
                 label={'Amortization Length (Years)'}
                 prefix={''}
                 setInput={setAmortization}
                 suffix={''} />
      <FormField decimal={false}
                 label={'Mortgage Term (Years)'}
                 prefix={''}
                 setInput={setTerm}
                 suffix={''} />
      <div className="mb-3">
        <button className="btn btn-primary"
                onClick={(event) => submit(event)}>Submit</button>
      </div>
    </form>
  );
}

export default Form;
