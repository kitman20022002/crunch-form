import React from 'react';
import TextField from "../TextField/TextField";
import './Search.css';
import {IoIosSearch} from "react-icons/io";
//https://www.eventbrite.com/engineering/a-story-of-a-react-re-rendering-bug/
export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialItems: this.props.content,
            items: this.props.content,
            show: false
        };
    }

    filterList = (event) => {
        let items = this.state.initialItems;
        items = items.filter((item) => {
            return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });

        this.setState({items: items});
        this.props.onChange(event);
    };

    selectCountry = (value) => {
        this.props.setCountryState(value);
    };

    toggleShow = () => {
        this.setState({'show': !this.state.show});
    };

    render() {
        const {error, value, disabled} = this.props;

        return (
            <div className={"search"}>
                <TextField name={"state"}
                           placeholder={this.state.show ? 'Search State or territory' : "New South Wales"}
                           label={"State"}
                           onChange={this.filterList}
                           error={error}
                           value={value}
                           disabled={disabled}
                           onBlur={this.toggleShow}
                           onFocus={this.toggleShow}
                           data-testid={'state'}
                />
                {this.state.show &&
                <ul className={"search-options"}>
                    {this.state.items.map((item) => {
                        return <li key={item} onMouseDown={() => this.selectCountry(item)}
                                   onMouseUp={this.toggleShow}>{item}</li>
                    })}
                </ul>
                }
                {this.state.show && <IoIosSearch className={"icon-search"}/>}
            </div>
        );
    }
};
