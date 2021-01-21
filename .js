const bioEnglish = props.bios.results.map(result => 
   result.uid == 'bio_english' ?
         <p>{RichText.asText(bio.data.about_body)}</p>
      : ''
   )
const bioSpanish = props.bios.results.map(result => 
   result.uid == 'bio_spanish' ?
         <p>{RichText.asText(bio.data.about_body)}</p>
      : ''
   )