import React from 'react';
import './App.css';
import './bootstrap-4.5.0-dist/css/bootstrap.min.css';
import './fontawesome-free-5.13.0-web/css/all.css';
import './mycss.css';
import Header from './components/Header'
import LeftSidebar from './components/LeftSidebar'
import Question from './components/Question'
import QuestionHeader from './components/QuestionHeader'
import Answer from './components/Answer'
import BlogSidebar from './components/BlogSidebar'
import LinksSidebar from './components/LinksSidebar';
import RelatedSidebar from './components/RelatedSidebar'

class App extends React.Component {

  render() {

    return (
      <div>

        <Header />
        <div className="container ">
          <div className="row ">

            <LeftSidebar />

            <main role="main" className="col-md-9  col-lg-10 p-4 ">
              <QuestionHeader />
              <div className="row justify-content-between">
                <div className="col-8">
                  <Question />
                  <div></div>
                  
                  <div className="row">
                    <div className="col">
                      <h5>2 Answers</h5>
                    </div>
                    <div className="col text-right">
                      <div className="btn-group float-roght" role="group" aria-label="Basic example">
                        <button className="btn btn-outline-dark">Active</button>
                        <button className="btn btn-outline-dark">Oldest</button>
                        <button className="btn btn-outline-dark">Votes</button>
                      </div>
                    </div>
                  </div>

                  <Answer
                    accepted={true}
                    comments={true}
                    content={`
                  React creates a tree of custom objects representing a part of the DOM. For
                  example, instead of creating an actual DIV element containing a UL element,
                  it creates a React.div object that contains a React.ul object. It can manipulate
                  these objects very quickly without actually touching the real DOM or
                  going through the DOM API. Then, when it renders a component, it uses this
                  virtual DOM to figure out what it needs to do with the real DOM to get the two
                  trees to match.
                  
                  You can think of the virtual DOM like a blueprint. It contains all the details
                  needed to construct the DOM, but because it doesn't require all the heavyweight
                  parts that go into a real DOM, it can be created and changed much more easily.
                  `}
                  />

                  <Answer
                    comments={false}
                    accepted={false}
                    content={`
                                Let's take an example — though a very naive one: If you have something messed up
                                in a room in your home and you need to clean it, what will be your first step?
                                Will you be cleaning your room which is messed up or the whole house? The answer
                                is definitely that you will be cleaning only the room which requires the cleaning.
                                That's what the virtual DOM does
                                Ordinary JS traverses or renders the whole DOM instead of rendering only
                                the part which requires changes.
                                So whenever you have any changes, as in you want to add another 'div' to your
                                DOM then the virtual DOM will be created which actually does not do any changes
                                in the actual DOM. Now with this virtual DOM, you will be checking the difference
                                between this and your current DOM. And only the part which is different
                                (in this case the new 'div') will be added instead of re-rendering the whole DOM.
                  `}
                  />
                </div>

                <div className="col-4 right-sidebar-component">
                  <BlogSidebar />
                  <LinksSidebar />
                  <RelatedSidebar />
                </div>
                
              </div>
            </main>
          </div>
        </div >
      </div >
    )
  }
}

export default App;
