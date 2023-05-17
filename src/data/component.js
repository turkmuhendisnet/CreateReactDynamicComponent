const component = {
  tabs: [
    {
      type: "MainCard",
      props: {
        id: "renaultLEAD",
        title: "Müşteri Teklif"
      },
      child: [
        {
          type: "SubCard",
          props: {
            id: "musteriIlgiDrm",
            title: "Müşteri İlgi Durumu"
          },
          child: [
            {
              type: "Grid",
              props: {
                spacing: 3,
                container: true,
                item: false,
                xs: false
              },
              child: [
                {
                  type: "Grid",
                  props: {
                    container: false,
                    item: true,
                    xs: 6
                  },
                  child: [
                    {
                      type: "TextField",
                      props: {
                        id: "cinsiyet",
                        name: "cinsiyet",
                        label: "Cinsiyet",
                        defaultValue: null,
                        fullWidth: true,
                        select: true,
                        onChange: true
                      },
                      child: [
                        {
                          type: "MenuItem",
                          props: {
                            id: "kadin",
                            key: "kadin",
                            value: "Kadın"
                          },
                          child: "Kadın"
                        },
                        {
                          type: "MenuItem",
                          props: {
                            id: "erkek",
                            key: "erkek",
                            value: "Erkek"
                          },
                          child: "Erkek"
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "Grid",
                  props: {
                    container: false,
                    item: true,
                    xs: 6
                  },
                  child: [
                    {
                      type: "TextField",
                      props: {
                        id: "askerlikDurumu",
                        name: "askerlikDurumu",
                        label: "Askerlik Durumu",
                        defaultValue: null,
                        fullWidth: true,
                        select: true,
                        onChange: true
                      },
                      child: [
                        {
                          type: "MenuItem",
                          props: {
                            id: "bos",
                            key: "bos",
                            value: null
                          },
                          child: "-"
                        },
                        {
                          type: "MenuItem",
                          props: {
                            id: "yapildi",
                            key: "yapildi",
                            value: "Yapıldı"
                          },
                          child: "Yapıldı"
                        },
                        {
                          type: "MenuItem",
                          props: {
                            id: "muaf",
                            key: "muaf",
                            value: "Muaf"
                          },
                          child: "Muaf"
                        },
                        {
                          type: "MenuItem",
                          props: {
                            id: "yapilmadi",
                            key: "yapilmadi",
                            value: "Yapılmadı"
                          },
                          child: "Yapılmadı"
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "Grid",
                  props: {
                    container: false,
                    item: true,
                    xs: 6
                  },
                  child: [
                    {
                      type: "NumberFormat",
                      props: {
                        id: "askerlikYapilmaTarihi",
                        name: "askerlikTarihi",
                        format: "##/##/####",
                        label: "Askerlik Tarihki",
                        helperText: "Örnek tarih formatı => 01/01/2022",
                        fullWidth: true,
                        error: false,
                        value: "",
                        customInput: "TextField",
                        required: true,
                        onChange: true
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default component;
