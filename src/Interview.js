
import React, {useState} from 'react';
import './main.css';
function Interview() {
    
    const [tabtoggle, settabtoggle] = useState(1);

    const toggleTab = (index) => {
        settabtoggle(index);
    }

    const ListItems = [
        {
            LinkName: 'React Js',
            Active: (tabtoggle === 1 ? "tabs tabs-active" : "tabs"),
            Click: (() => toggleTab(1)),          
        },
        {
            LinkName: 'Javascript',
            Active: (tabtoggle === 2 ? "tabs tabs-active" : "tabs"),
            Click: (() => toggleTab(2)),            
        },
        {
            LinkName: 'CSS',  
            Active: (tabtoggle === 3 ? "tabs tabs-active" : "tabs"),          
            Click: (() => toggleTab(3)),           
        },
        {
            LinkName: 'HTML', 
            Active: (tabtoggle === 4 ? "tabs tabs-active" : "tabs"),
            Click: (() => toggleTab(4)),            
        },
        {
            LinkName: 'SASS', 
            Active: (tabtoggle === 5 ? "tabs tabs-active" : "tabs"),            
            Click: (() => toggleTab(5)),            
        }
    ]

    const TabItems = [
        {
            TabName: 'React Js',
            Active: (tabtoggle === 1 ? "tab-content tab-content-active" : "tab-content"),
            Data: [
                {
                    Question: "What is React?",
                    Answer: "React is a declarative, efficient, flexible open source front-end JavaScript library developed by Facebook in 2011. It follows the component-based approach for building reusable UI components, especially for single page application"
                },

                {
                    Question: "What is JSX?",
                    Answer: "JSX stands for JavaScript XML. It is a React extension which allows writing JavaScript code that looks similar to HTML."
                },

                {
                    Question: "What is Virtual DOM?",
                    Answer: "A Virtual DOM is a lightweight JavaScript object which is an in-memory representation of real DOM."
                },
            ],
        },
        {
            TabName: 'Javascript',
            Active: (tabtoggle === 2 ? "tab-content tab-content-active" : "tab-content"),
            Data: [
                {
                    Question: null,
                    Answer: null
                },
            ],
        },        
        {
            TabName: 'CSS',
            Active: (tabtoggle === 3 ? "tab-content tab-content-active" : "tab-content"),
            Data: [
                {
                    Question: null,
                    Answer: null
                },
            ],
        },
        {
            TabName: 'HTML', 
            Active: (tabtoggle === 4 ? "tab-content tab-content-active" : "tab-content"),
            Data: [
                {
                    Question: null,
                    Answer: null
                },
            ],
        },
        {
            TabName: 'SASS', 
            Active: (tabtoggle === 5 ? "tab-content tab-content-active" : "tab-content"), 
            Data: [
                {
                    Question: null,
                    Answer: null
                },
            ],
        }
    ]

    const ListItemsWrapper = ListItems.map((lists) => (
        <li><a className={lists.Active} onClick={lists.Click}> {lists.LinkName}</a> </li>
      ));
    
    const TabsContentWrapper =  TabItems.map(tabs => {
        return(
        <div className={tabs.Active}>
           <h1 className="mb-20"><span>{tabs.TabName}</span></h1>
           <div>
           {tabs.Data.map((subdata) => (
            <div className="qa">
            <h2>{subdata.Question}</h2>
            <p>{subdata.Answer}</p>
            </div>
            ))}
            </div>
           
        </div>
        )
    });


  return (
      <header className="iq">
      <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-sm-4 col-xs-12">
                <ul className='interviewlist'>                    
                    {ListItemsWrapper}
                </ul>
            </div>
            <div className="col-xl-9 col-lg-8 col-sm-8 col-xs-12">

            {TabsContentWrapper}


            </div>
        </div>
      
      </div>
      </header>
  );
}

export default Interview;
