function calculateTriangleArea(){
   const triangleBaseValue = getInputFieldValue('triangle-base');
   const triangleHeightValue = getInputFieldValue('triangle-height');
   const triangleArea = 0.5* triangleBaseValue*triangleHeightValue;
   
   setAreaValue('triangle-area',triangleArea);
}

function calculateRectangleArea(){
   const rectangleWidthValue = getInputFieldValue('rectangle-width');
   const rectangleLengthValue = getInputFieldValue('rectangle-length');
   
   const rectangleArea = rectangleWidthValue * rectangleLengthValue;

   setAreaValue('rectangle-area',rectangleArea);
}

function calculateParallelogramArea(){
   const paraBaseValue = getInputFieldValue('parallelogram-base');
   const paraHeightValue = getInputFieldValue('parallelogram-height');

   const paraArea = paraBaseValue * paraHeightValue;
   
   setAreaValue('para-area',paraArea);
}