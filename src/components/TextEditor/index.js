import './index.css'
import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  BackGroundContainer,
  MainContainer,
  AppContainer,
  LeftContainer,
  RightContainer,
  LeftHeading,
  LeftImage,
  EditorUl,
  EditorLi,
  Button,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderLine: false,
  }

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderLine = () => {
    this.setState(prevState => ({isUnderLine: !prevState.isUnderLine}))
  }

  render() {
    const {isBold, isItalic, isUnderLine} = this.state

    return (
      <BackGroundContainer>
        <MainContainer>
          <AppContainer>
            <LeftContainer>
              <LeftHeading>Text Editor</LeftHeading>
              <LeftImage
                src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                alt="text editor"
              />
            </LeftContainer>
            <RightContainer>
              <EditorUl>
                <EditorLi>
                  <Button
                    type="Button"
                    data-testid="bold"
                    onClick={this.onClickBold}
                    color={isBold}
                  >
                    <VscBold size={22} />
                  </Button>
                </EditorLi>
                <EditorLi>
                  <Button
                    type="Button"
                    data-testid="italic"
                    onClick={this.onClickItalic}
                    color={isItalic}
                  >
                    <GoItalic size={22} />
                  </Button>
                </EditorLi>
                <EditorLi>
                  <Button
                    type="Button"
                    data-testid="underline"
                    onClick={this.onClickUnderLine}
                    color={isUnderLine}
                  >
                    <AiOutlineUnderline size={22} />
                  </Button>
                </EditorLi>
              </EditorUl>
              <TextArea
                isBold={isBold}
                isItalic={isItalic}
                isUnderLine={isUnderLine}
              />
            </RightContainer>
          </AppContainer>
        </MainContainer>
      </BackGroundContainer>
    )
  }
}

export default TextEditor
