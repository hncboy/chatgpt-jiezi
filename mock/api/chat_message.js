const returnData = [
  {
    messageId: '20a6c492-1c1c-4b76-acbf-501c395fd74d',
    parentMessageId: null,
    parentAnswerMessageId: null,
    parentQuestionMessageId: null,
    contextCount: 1,
    questionContextCount: 1,
    messageType: 'QUESTION',
    chatRoomId: 1641428167675150300,
    conversationId: null,
    apiType: 'ChatGPTAPI',
    ip: '223.104.165.184',
    content: 'hello',
    responseErrorData: '{\n    "error": {\n        "message": "Incorrect API key provided: xxx. You can find your API key at https://platform.openai.com/account/api-keys.",\n        "type": "invalid_request_error",\n        "param": null,\n        "code": "invalid_api_key"\n    }\n}\n',
    promptTokens: -1,
    completionTokens: -1,
    totalTokens: -1,
    status: 'ERROR',
    createTime: '2023-03-30T13:12:26.103+00:00',
    updateTime: '2023-03-30T13:12:26.741+00:00',
  },
  {
    messageId: '517d6909-0a11-4fd9-9198-bd0c187b7dec',
    parentMessageId: null,
    parentAnswerMessageId: null,
    parentQuestionMessageId: null,
    contextCount: 1,
    questionContextCount: 1,
    messageType: 'QUESTION',
    chatRoomId: 1641427461425660000,
    conversationId: null,
    apiType: 'ChatGPTAPI',
    ip: '0:0:0:0:0:0:0:1',
    content: 'hello',
    responseErrorData: '{\n    "error": {\n        "message": "Incorrect API key provided: xxx. You can find your API key at https://platform.openai.com/account/api-keys.",\n        "type": "invalid_request_error",\n        "param": null,\n        "code": "invalid_api_key"\n    }\n}\n',
    promptTokens: -1,
    completionTokens: -1,
    totalTokens: -1,
    status: 'ERROR',
    createTime: '2023-03-30T13:09:37.721+00:00',
    updateTime: '2023-03-30T13:09:38.780+00:00',
  },
]

export default [
  {
    url: '/api/chat_message/page_',
    method: 'post',
    response: (data = {}) => {
      // const { title, pageNum, pageSize } = data.query
      const { pageNum, pageSize } = data.query
      const pageData = returnData
      const total = 60
      // 过滤
      // const filterData = returnData.filter(item => item.chatRoomId.includes(title) || (!title && title !== 0))
      // if (filterData.length) {
      //   if (pageSize) {
      //     while (pageData.length < pageSize)
      //       pageData.push(filterData[Math.round(Math.random() * (filterData.length - 1))])
      //   }
      //   else {
      //     pageData = filterData
      //   }
      //   pageData = pageData.map((item, index) => ({
      //     id: pageSize * (pageNum - 1) + index + 1,
      //     ...item,
      //   }))
      // }
      // else {
      //   total = 0
      // }
      return {
        code: 0,
        message: 'ok',
        data: {
          pageData,
          total,
          pageNum,
          pageSize,
        },
      }
    },
  },
  {
    url: '/api/chat_message/post',
    method: 'post',
    response: ({ body }) => {
      return {
        code: 0,
        message: 'ok',
        data: body,
      }
    },
  },
  {
    url: '/api/chat_message/post/:id',
    method: 'put',
    response: ({ query, body }) => {
      return {
        code: 0,
        message: 'ok',
        data: {
          id: query.id,
          body,
        },
      }
    },
  },
  {
    url: '/api/chat_message/post/:id',
    method: 'delete',
    response: ({ query }) => {
      return {
        code: 0,
        message: 'ok',
        data: {
          id: query.id,
        },
      }
    },
  },
]
