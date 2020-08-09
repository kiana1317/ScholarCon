<table style="width:100%">
        <tr>
          <th>
            <div>
              <h4> What is CSS? </h4>
              <h5> CSS (Cascading Stylesheet) is the language for bringing style, color, formatting, and life to any website. Some of the most common attributes: <br>
                <ul>
                  <li>Color </li>
                  <li>Text Alignment </li>
                  <li> Left, right, top, bottom </li>
                  <li> Width, height </li>
                </ul>
              </h5>
            </div>
          </th>
          <th> 
            <div>
              <p>Here are the tags we will cover today: </p>
              <ul id = "list">
                <li> Paragraphs < p > <\p> </li>
                <li> Headers < h1 > <\h1> (h1 largest-h6 smallest)</li>
                <li> Hyperlinks < a href = "url"> </li>
                <li> List < ol > (ordered list) < ul >(unordered list ) </li>
                <li> Images < img src = "" > </li>
                <li> Div </li>
              </ul>
              <img id ="tag" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAACbCAMAAAAtKxK6AAAAwFBMVEUMruD5+fn///8AXpxxyOoAq98rt+MAqd4Ap94AUpb9/PsdseHA0+Hz+PkAWpn//vtVvOQMsuQCaKWd1e7v+v2d2vHC5/ULotXd8/q75fUKndEIkcfL6PaJ0e3r+P2EzOsAT5WvwNMwb6Wu3/KhudHS3egASZJ3zOsARJCKqscxcqeImbZCuuVhw+iatc5mkrnm7PFQhLF3n8KbuNHM1+SXrcWpuMxbh7Hd4uoAOofo7/S4w9RTeqVuia4Gg7tDe6xCQSM6AAAJt0lEQVR4nO2deV/qOBeASyUEWloQobfMZbWsTllU5orOnfH7f6tJ0h2KWnLqW3jP8wfatFZ8fklzThZU5mVEFqVCEFmUioJIgxIBQIkAoEQAUCIAKBEAlAgASgQAJQKAEgFAiQCgRABQIgAoEQCUCABKBAAlAoASAUCJAKBEAFAiACgRAJQIAEoEACUCgBIBQIkAoEQAUCIAKBEAlAgASgQAJQKAEgFAiQCgRABQIgAoEYCsEm+/jqLn8o4LSEaJP1pf5uePP27zec+FI6tE8+aLmD9/mBIWSZVD00uqqRB+ivoHNOVuwTXhHc5+dwfkKvF8i6SjcgaRC2KJkh4rqaqpzJkh3fAP7IT/ZnBNx7NY8Y6aZ767Q3KVeHO2Rdo5VEG6osT6RGI7OIo/kKlzQiJRQMhX4tkW5SXOY4JoWHqREs+1KC/RirVnN7zmMiWeaVFeohoJilpzsSSapvdi1jjsizjmr7UDiedZ/FAiOxD4xlbU2zDLiUlchYbIoJASzc2SCdw81ZaT5+fJ881m8sCOHycbs/XcOpB4lsVPJHr4xsrksEhIc8Ji0ZrbhZNYG+9r7GU3+uvX3vj1yxyr49rNqM5e79V780DiORblJIrmO0jeyymixJk5Gu9qtdl6uqgxnUbNbBn7dIlnWJSTOBflbnAvUTFXxZM42W6eNrs6q46TKa+T47eX2nK3OyExu0U5iUMRmHf8S0Vrtt0CStT2+30pJnFdX2xfpqckZrYYSKyGH7RQzSCxXxbtmcZu1SmixP3r6JU151DiQ6mlzU5LzGrRlzgYRvQyPBP1WHsmtvi+gM3Z71giiYu3/d8LIfFm5MU7SYkZLfoSj/maxKoQ1xcnRBUcVMsFlLgNJXKd9b9Ha/X3SHQs0+l0aR5LzGZRVuId/8IHK/yhjA4tnkTz9z9m/OXlt9n6s2b+89u8+ZPxO01iJotyEnvUsyTuJPpml/YLJzHMWGIvpv+Fk9Kcs1mUlVgV6oYkaM2EFFDi54jxxEN+ftWiL9HoRQyySPTSZXYxufNa86VKJD+P+ervCUMcGpAlxOlRbxjW0BXq9c3KhUr8948Uvvp75IJt3qOIIe4VEbra9EIl3hw3ZtOsffVdS0uk4vJu1cubL1Ziqthvk0hESGN4ASOTVSiJo5oMo2+TqCjinMhTBuyCIkl0d3UZdl+dz5eXSEWaOPBbc6EkNhuaDI3vk+hb47inaqJLI7J5SJJZYkmGb5QYiBJ98wmJltMNyeYhyfVK9CJEvzWnS4wjs+TleiWSIHMUT75PJWbzkOR6JQazzW1xGiVy/LU4CYnqhxL9mVLHO/g/bM5kdcfpR35IWZQkjImSOzf+g31eMiSxn/BPN8WBPxnt/2ScbB6SFFSiEnyE9UclynFJoih5OnGU8mHZEhRV4kWBEgFAiQCgRABQIgDwEj+6QlYi0KgLNOASt8u33CSSu2LWZGiJjXXNyE1iBWy9PyzgEt83H1wiJ5GUr1uipvlft6O6Fh4BS2QJ9TVLbOyXnjdtPDPYy+6Ea0mJvWOJqRlbah4nndydBkKipi1nL94J9fFRLWnr1ycjVaOMRFp126ob33NGKK2Uh8OhSw8y6iYrLFfi+9NIVVxZrlCag0h5iVqjzhd9egfGbMy+a9Rbs+dSSpuWkKg70caArjBDm46/Cc2Ij/boTmKIqy0K++EGAqt89ls4ibTExvZx8fTmF2v10Za7a5TWs/udeqRRQqIbE+NJFAOMPcvqhSUMwqrroLNarTrMue10+nNeymcKbMuy/DUl0EhK1Izl4n2vhpI27/4FjbfN62Z7qFyuOdNBvDlTR3WaYqKOTwQEdfGWj8LyjS18TZOhUP4Y5LOnQ+JN6q0cS2piLxUpibwlm+NGVOEMc90Iz03vR+uD/EUyThwkOhZdD55vzFewQNvxh7UV4c4J5gnCGWYCr1BOorZ/XCzjPYhWf91GRjVtPGrVExZBJcbQg0aqt2O+Vmqbb2lm4aWdh7oICYnabvHwpiYcPd0nnZU2i0n8wZiXRGr7My2u15H4eDMnTOYg36RbpiZuH0cv+3jvod4s4+cbxlPtfvodEknXeygmfVX9+uny/X9Sv/gTpJ6J6u598TINn4nadBZT1tg+Le7HyR46t5oYSGxGu9FYqb91nLJ+vJmnRbnemfUsDzPWCXum1GUrVNYwlqObyWGsCC2R+LFzIJE/HKNfwWqgr46FNpabR5jtIRsnaur4frHZigqn3T+FAc5yZE6OhxZhJVJ92LWDKNqTSOxwNxrvqYPwUayGsPt6Th4BMhZt3Jo9bfngw2Ln1TxjXastDfXoUlCJRBfRtsGCaMexA4krVS0LVYTvXAn/OlrhwbdqQS2mSwKSO5cmtXe11FibvqrlYvkGnjsrSYlcV7vTvPVWxTtBtM2XTnRXuqKvuvF94+wEKXPpvUohc2chp1TXSuqDP5So7Y5SFXiJLt9YEUbb3TBlofMgx7bdg3l9KtLqFbxFqEFZzR9K9A9OACeR9bi9qMNlyUkgkVQGKl922E/rSKhux9o4GHAj29r4o4kB8JpoxKsUsUOJrjrQRUKdegfC7tEBj3bgJDbeH1O6krwk6okapYcjEKxOuh+1V9qP12AgAGvicnqyGcNJDATp8SEtGg3jsCzlw48AI8NCSyw1PnUoO1EVNVpFaUefwURcNaqJrIbSg5Ve8ZoZCx7huKQVEKwzsYNqxprtwLNEqGuooV4WVhtOvy/26je9cS9SDp+QpLrKo3u+JIk8NOzqxHvTrPYNyux2epMHhP1QYjW+ydfiUSFtq05Z/J2VlaXmUBEvSqIYSVDb7TZ/HNK5973BkpYmO/Ak0qbNpwwcx+laFg8Y2UPU20bQ5j+nxj9zCI6Lksj6VpEq2/w2tNL1DvrsoefaYjyR9b3tcrS7lxnly97J3PIybMN23KKNbH+/RIUQnREkJ4o48KqgP5yo3sZqGlG8ZfHE+zF2bT4DYhcm8WNYb5OMpFn773zDSrKrksjinmTXy3Jq+PzkmKuSqB9uHI3l1HlyVRJZTSwnneUxVX/MVUmMR+MKD8OtHHK8FK5KIo/AHeJnfZS6LML5ln8LcF0S+Sc/GM68yZg7Ng8ov2WV93VJTK4Js/KdbY64MonsuUjdeZ9RrpD85kgPuDqJSuq+yXzJKlEzZNCKuYVClqy9ly5HLn/D/xz8z0AAoEQAUCIAKBEAlAgASgQAJQKAEgFAiQCgRABQIgAoEQCUCABKBAAlAoASAUCJAKBEAFAiACgRAJQIAEoEACUCgBIBQIkAoEQAUCIAKBEAlAgASgQAJQKAEgFAiQCgRHn+Ax6iC1V7Y0JwAAAAAElFTkSuQmCC" style= "width: 60%; height: auto">
            </div>
          </th> 
        </tr>
      </table>
