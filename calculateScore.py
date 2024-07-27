import math

from extractKeywords import extractKeywords

def calculateScore(resume,job_desc):
    present_array = []
    missing_array = []
    additional_array = []
    present_str = ''
    missing_str = ''
    additional__str = ''
    resume_keywords = extractKeywords(resume)
    job_desc_keywords = extractKeywords(job_desc)
    count = 0
    for word in resume_keywords:
        if word in job_desc_keywords:
            count+=1
            present_array.append(word)
            present_str = ",".join(present_array)
    score = count/len(job_desc_keywords)

    for word in job_desc_keywords:
        if word not in resume_keywords:
            missing_array.append(word)
            missing_str = ",".join(missing_array)
            
    for word in resume_keywords:
        if word not in job_desc_keywords:
            additional_array.append(word)
            additional__str = ",".join(additional_array)
            
    # return math.floor(score*100)
    return math.floor(score*100),present_str,missing_str,additional__str