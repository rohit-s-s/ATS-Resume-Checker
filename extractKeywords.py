from pdfquery import PDFQuery
import string
import numpy as np

stop_words = ["i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours", "yourself",
              "yourselves", "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself",
              "they", "them", "their", "theirs", "themselves", "what", "which", "who", "whom", "this", "that", "these",
              "those", "am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", "do",
              "does", "did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until", "while",
              "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before",
              "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again",
              "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each",
              "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than",
              "too", "very", "s", "t", "can", "will", "just", "don", "should", "now",""]

keywords = np.load("keywords.npy")

def extractKeywords(filename):
    pdf = PDFQuery(filename)
    pdf.load()

    # Use CSS-like selectors to locate the elements
    text_elements = pdf.pq('LTTextLineHorizontal')

    # Extract the text from the elements
    text = [t.text for t in text_elements]

    words = []

    for i in text:
        # initializing string
        test_str = i
        # Removing punctuations in string
        test_str = test_str.translate(str.maketrans('', '', string.punctuation))
        for j in test_str.split():
            words.append(j.lower())

    #removing digits from keywords
    for i in words:
        if i.isdigit():
            words.remove(i)
        
    #removing duplicate values 
    tokenized_words = list(set(words))

    final_words = []
    for word in tokenized_words:
        if word not in stop_words:
            final_words.append(word)


    result = []
    for word in final_words:
        if word in keywords:
            result.append(word)
    
    
    # returning result
    return result